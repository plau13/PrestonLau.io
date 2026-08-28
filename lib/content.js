import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

async function markdownToHtml(markdown) {
  if (!markdown?.trim()) {
    return '';
  }

  const result = await remark().use(remarkHtml).process(markdown);
  return result.toString();
}

function readMarkdownFiles(relativeDir) {
  const dir = path.join(contentDirectory, relativeDir);

  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      if (entry.isDirectory()) {
        const filePath = path.join(dir, entry.name, 'index.md');
        return fs.existsSync(filePath) ? [filePath] : [];
      }

      if (entry.isFile() && entry.name.endsWith('.md')) {
        return [path.join(dir, entry.name)];
      }

      return [];
    })
    .map((filePath) => {
      const raw = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(raw);
      return {
        ...data,
        slug: path.basename(path.dirname(filePath)) || path.basename(filePath, '.md'),
        body: content.trim(),
      };
    });
}

export async function getFeaturedProjects() {
  const projects = readMarkdownFiles('featured')
    .sort((a, b) => b.title.localeCompare(a.title))
    .map((project) => ({
      ...project,
      stack: project.stack || project.tech || [],
      html: project.body,
    }));

  return Promise.all(
    projects.map(async (project) => ({
      ...project,
      problemHtml: await markdownToHtml(project.problem || ''),
      whatIBuiltHtml: await markdownToHtml(project.whatIBuilt || project.body || ''),
      resultHtml: await markdownToHtml(project.result || ''),
    })),
  );
}

export async function getJobs() {
  const jobs = readMarkdownFiles('jobs').sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return Promise.all(
    jobs.map(async (job) => ({
      ...job,
      html: await markdownToHtml(job.body),
    })),
  );
}

export async function getLessons() {
  const lessonsDir = path.join(contentDirectory, 'lessons');
  const files = fs.readdirSync(lessonsDir).filter((f) => f.endsWith('.md'));

  const lessons = files
    .map((file) => {
      const raw = fs.readFileSync(path.join(lessonsDir, file), 'utf8');
      const { data } = matter(raw);
      return {
        ...data,
        slug: path.basename(file, '.md'),
        mistake: data.mistake?.trim(),
        lesson: data.lesson?.trim(),
        theme: data.theme?.trim(),
        title: data.title?.trim(),
        context: data.context?.trim(),
      };
    })
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

  return lessons;
}
