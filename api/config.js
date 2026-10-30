module.exports = function handler(req, res) {
  const url = process.env.SUPABASE_URL || '';
  const key = process.env.SUPABASE_PUBLISHABLE_KEY || '';
  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).json({ url, key });
};
