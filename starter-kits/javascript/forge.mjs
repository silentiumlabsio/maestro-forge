export function normalizeText(value) {
  if (typeof value !== 'string') throw new TypeError('text must be a string');
  const cleaned = value.trim().replace(/\s+/g, ' ');
  if (!cleaned) throw new RangeError('text must not be empty');
  if (cleaned.length > 200) throw new RangeError('text must be 200 characters or fewer');
  return cleaned;
}

if (import.meta.url === `file://${process.argv[1].replace(/\\/g, '/')}`) {
  try {
    console.log(normalizeText(process.argv[2] ?? ''));
  } catch (error) {
    console.error(`error: ${error.message}`);
    process.exitCode = 2;
  }
}
