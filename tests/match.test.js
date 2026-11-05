import test from 'node:test';
import assert from 'node:assert/strict';
import { activities } from '../src/activities.js';
import { matches, defaults } from '../src/match.js';

test('the example break returns a chai loop within 30 minutes and ₹50 per person', () => {
  const found = matches(activities, defaults);
  assert.equal(found[0].id, 'chai-loop');
  assert.ok(found.every(item => item.minutes <= 30 && item.cost <= 50 && item.company !== 'solo'));
});

test('all offered combinations respect time, cost, company and mood', () => {
  for (const minutes of [10,15,30,45,60]) for (const budget of [0,50,100,200])
    for (const company of ['solo','friends']) for (const mood of ['any','social','creative','calm','energetic','curious']) {
      const found = matches(activities,{ minutes, budget, company, mood });
      for (const a of found) {
        assert.ok(a.minutes<=minutes && a.cost<=budget);
        assert.ok(a.company==='either' || a.company===company);
        assert.ok(mood==='any' || a.moods.includes(mood));
      }
    }
});

test('a tight solo social break can return an honest empty result', () => {
  assert.deepEqual(matches(activities,{minutes:15,budget:0,company:'solo',mood:'social'}),[]);
});
