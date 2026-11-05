// All costs are estimated rupees per student. Time is the full break, including the walk back.
export const activities = [
  {
    id: 'chai-loop', title: 'The chai loop', art: 'chai', tag: 'Canteen stop',
    minutes: 25, cost: 30, company: 'either', moods: ['social', 'calm'],
    description: 'Walk to the chai counter, grab a cutting chai and take the long way back.',
    steps: ['Pick a nearby chai counter and check the price.', 'Order a cup and take a five-minute breather.', 'Walk a different lane back before class.']
  },
  {
    id: 'sketch-swap', title: 'One-page sketch swap', art: 'sketch', tag: 'Creative corner',
    minutes: 20, cost: 0, company: 'friends', moods: ['creative', 'social'],
    description: 'Fold a sheet in half. Draw for two minutes, swap, and finish each other’s doodle.',
    steps: ['Find one sheet of paper and a pen each.', 'Sketch a campus object, then trade pages.', 'Add a surprise detail and reveal both drawings.']
  },
  {
    id: 'photo-walk', title: 'Three-colour photo walk', art: 'camera', tag: 'Out and about',
    minutes: 20, cost: 0, company: 'either', moods: ['curious', 'creative'],
    description: 'Pick three colours and hunt for them on a short loop around campus.',
    steps: ['Choose three colours before you leave.', 'Photograph one campus detail in each colour.', 'Compare the three shots on your way back.']
  },
  {
    id: 'garba-steps', title: 'One garba step', art: 'music', tag: 'Between lectures',
    minutes: 15, cost: 0, company: 'friends', moods: ['creative', 'energetic'],
    description: 'Know one garba step your friend doesn’t? Teach it in an outdoor corner before the next lecture.',
    steps: ['Find a clear patch away from doors and passing students.', 'Count one step slowly together, then try it for one chorus.', 'Swap who leads, then leave five minutes to get to class.']
  },
  {
    id: 'library-sampler', title: 'The new-arrivals shelf', art: 'sketch', tag: 'FOET Library',
    minutes: 15, cost: 0, company: 'either', moods: ['curious', 'calm'],
    description: 'Passing the FOET Library with fifteen minutes to spare? Try the first page of a book outside your branch.',
    steps: ['Check the library is open and look for the new-arrivals display or a nearby shelf.', 'Pick a title outside your subject and read a page where you stand.', 'Jot down the title if you want to return, then follow the library’s reshelving instructions.']
  },
  {
    id: 'post-lab', title: 'The post-lab refill', art: 'leaf', tag: 'Between labs',
    minutes: 10, cost: 0, company: 'either', moods: ['calm'],
    description: 'Close the laptop, refill your bottle and give yourself a few minutes away from a screen.',
    steps: ['Pack up your bench and check where your next class meets.', 'Take your bottle to the nearest drinking-water point on that route.', 'Walk back with two minutes to spare before the next bell.']
  },
  {
    id: 'rally-seven', title: 'First to seven', art: 'paddle', tag: 'Sports break',
    minutes: 25, cost: 0, company: 'friends', moods: ['energetic', 'social'],
    description: 'Got paddles and a ball? If a table is free, play one short table-tennis game between classes.',
    steps: ['Bring your own kit or check whether free kit and a table are available.', 'Warm up with a few returns, then play one game to seven.', 'Give the next pair a turn and leave five minutes for the walk back.']
  },
  {
    id: 'tiffin-table', title: 'The tiffin table', art: 'lunch', tag: 'Lunch gap',
    minutes: 25, cost: 0, company: 'friends', moods: ['social', 'calm'],
    description: 'Bring the lunch you packed to the same table for once. Everyone picks the best bite in their own dabba.',
    steps: ['Meet at a nearby lunch spot with the tiffins you already brought.', 'Catch up over lunch. If you swap a bite, check the ingredients with each other first.', 'Pack up together with five minutes left for class.']
  },
  {
    id: 'chorus-swap', title: 'One chorus each', art: 'music', tag: 'Music break',
    minutes: 15, cost: 0, company: 'friends', moods: ['creative', 'social'],
    description: 'Each friend gets one chorus to win the other over to a song. Take both titles home for the evening commute.',
    steps: ['Pick a spot where you can talk and each choose one song already on your phone.', 'Play or hum one chorus each at a considerate volume.', 'Save the two titles and head back when the second chorus ends.']
  },
  {
    id: 'poster-stop', title: 'The noticeboard detour', art: 'sketch', tag: 'Club corner',
    minutes: 10, cost: 0, company: 'either', moods: ['curious'],
    description: 'Walk past a student noticeboard on the way to class. Pick one club poster you’d actually stop for.',
    steps: ['Use a board already on your route.', 'Read one poster and check the date, venue and whether it needs registration.', 'If it still sounds good, note the details for later and carry on to class.']
  },
  {
    id: 'canteen-window', title: 'The short-queue snack', art: 'chai', tag: 'Canteen stop',
    minutes: 15, cost: 40, company: 'either', moods: ['calm', 'curious'],
    description: 'You have fifteen minutes and ₹40. See what’s ready at the counter before you commit to the queue.',
    steps: ['Check the displayed price and pick a ready-to-serve snack within ₹40.', 'If the line will take more than five minutes, skip it and sit with your water instead.', 'Leave the counter area with five minutes in hand for the walk back.']
  },
  {
    id: 'sideline', title: 'Watch one game', art: 'paddle', tag: 'Sports break',
    minutes: 20, cost: 0, company: 'either', moods: ['curious', 'calm'],
    description: 'No kit in your bag? If there’s a game going on, watch a few rallies on the way past the sports area.',
    steps: ['Choose a court near your route and stay outside the playing area.', 'Watch for one good pass or rally. If the court is empty, take a short loop instead.', 'Turn back with enough time to reach the next classroom.']
  },
  {
    id: 'bench', title: 'The quiet bench', art: 'leaf', tag: 'Quiet time',
    minutes: 10, cost: 0, company: 'either', moods: ['calm', 'curious'],
    description: 'Borrow a patch of shade and listen for three sounds you usually walk past.',
    steps: ['Find a shaded seat close to class.', 'Put your phone away and listen for three sounds.', 'Pick a favourite sound before heading back.']
  },
  {
    id: 'paper-game', title: 'Margin Olympics', art: 'sketch', tag: 'Table games',
    minutes: 15, cost: 0, company: 'friends', moods: ['social', 'energetic'],
    description: 'Turn the corner of a notebook into a tiny tournament of dots and boxes.',
    steps: ['Draw a five-by-five grid of dots.', 'Take turns joining dots and claiming boxes.', 'Count the boxes when your break is up.']
  },
  {
    id: 'solo-zine', title: 'A pocket-sized comic', art: 'sketch', tag: 'Creative corner',
    minutes: 15, cost: 0, company: 'either', moods: ['creative'],
    description: 'Tell the story of your morning in four tiny panels on a notebook page.',
    steps: ['Fold a page into four panels.', 'Draw one moment from your morning in each.', 'Give the comic a title and tuck it into your bag.']
  },
  {
    id: 'stair-lap', title: 'The courtyard lap', art: 'leaf', tag: 'On the move',
    minutes: 10, cost: 0, company: 'either', moods: ['energetic'],
    description: 'Set a ten-minute timer and take a brisk loop past a favourite landmark.',
    steps: ['Choose a short familiar loop.', 'Walk for five minutes at a comfortable pace.', 'Turn back when the timer reaches halfway.']
  },
  {
    id: 'shelf', title: 'The shelf lottery', art: 'sketch', tag: 'Library stop',
    minutes: 15, cost: 0, company: 'either', moods: ['curious', 'calm'],
    description: 'Let a library shelf choose a book for you. Open it somewhere in the middle.',
    steps: ['Pick a shelf you rarely visit.', 'Read one page from a book that catches your eye.', 'Note a line to take back with you and reshelve the book.']
  },
  {
    id: 'lemon', title: 'Nimbu break', art: 'chai', tag: 'Canteen stop',
    minutes: 20, cost: 40, company: 'either', moods: ['calm', 'social'],
    description: 'Find a nearby nimbu-pani stall and settle in for a screen-free drink.',
    steps: ['Check the menu against your budget.', 'Order a lime drink and find a spot in the shade.', 'Leave five minutes for the return walk.']
  },
  {
    id: 'letters', title: 'Campus alphabet', art: 'camera', tag: 'Scavenger hunt',
    minutes: 30, cost: 0, company: 'friends', moods: ['curious', 'energetic'],
    description: 'Race to spot letter shapes in railings, branches and shadows around the quad.',
    steps: ['Pick five letters as a group.', 'Find and photograph each shape in the quad.', 'Compare photos and vote for the cleverest find.']
  },
  {
    id: 'picnic', title: 'The snack exchange', art: 'chai', tag: 'Canteen stop',
    minutes: 40, cost: 80, company: 'friends', moods: ['social', 'curious'],
    description: 'Each friend picks a different canteen snack for a little tasting table.',
    steps: ['Agree on a budget and check everyone’s food preferences.', 'Each pick one snack and find a table together.', 'Share a taste and decide what to order next time.']
  },
  {
    id: 'postcard', title: 'Postcard from the quad', art: 'camera', tag: 'Creative corner',
    minutes: 30, cost: 0, company: 'solo', moods: ['creative', 'calm'],
    description: 'Frame a familiar corner like a postcard and write a two-line note about today.',
    steps: ['Find a detail that captures today’s mood.', 'Take a photo or sketch a quick outline.', 'Write a two-line postcard to your future self.']
  }
];
