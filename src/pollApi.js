// Supabase publishable keys are intended for browser apps. Database grants control access.
const endpoint = import.meta.env.VITE_SUPABASE_URL || 'https://zicfyfsmirykorfshocf.supabase.co';
const publishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_aEg2B6CJ3QXHYZ5x7_2zXA_z9sBOFP9';
export const pollIdPattern = /^[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/i;

export function deviceId() {
  const key = 'pocket-plans.poll-device';
  try {
    let id = localStorage.getItem(key);
    if (!pollIdPattern.test(id || '')) {
      id = crypto.randomUUID();
      localStorage.setItem(key, id);
    }
    return id;
  } catch { throw new Error('Allow browser storage to start a poll or cast a vote.'); }
}

export async function requestPoll(action, args) {
  const response = await fetch(endpoint + '/rest/v1/rpc/pp_' + action, {
    method: 'POST',
    headers: { apikey: publishableKey, 'Content-Type': 'application/json' },
    body: JSON.stringify(args),
    signal: AbortSignal.timeout(12000)
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.code === 'P0001' ? data.message : 'The poll could not be loaded. Please try again.');
  return data;
}

