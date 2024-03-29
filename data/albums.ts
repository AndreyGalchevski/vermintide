export type AlbumName = 'Meaningless Convulsions' | 'Ashamed Of My Species' | 'Virus Pedigree';

export interface Word {
  title: string;
  content: string;
}

export interface Album {
  name: AlbumName;
  streamingURL: string;
  artworkURL: string;
  purchaseURL: string;
  lyrics: Array<Word>;
}

const sounds: Array<Album> = [
  {
    name: 'Virus Pedigree',
    streamingURL:
      'https://open.spotify.com/embed/album/6SoOwUhmmvHgQ5KDP3gF2O?utm_source=generator',
    artworkURL:
      'https://res.cloudinary.com/dqvimfd8b/image/upload/v1706013868/vermintide/sounds/Virus_Pedigree_-_600.png',
    purchaseURL: 'https://vermintide.bandcamp.com/album/virus-pedigree',
    lyrics: [
      {
        title: 'Sky Burial',
        content: `
Sky
Burial

Bury me
In the sky
Make me be
One with the Earth

Let nature
Feast upon
My useless
Corpse until I

I am no more
I am no more
I am no more
I am no

Bury me
In the sky
Make me be one
With the Earth

Cemetery real estate
Buy one now or it’s too late
Get a pretty tombstone
Accept death
      `,
      },
      {
        title: 'Cut By Hitchens’s Razor',
        content: `
	
Cut by
Hitchens’s razor
Cut by

Cutting through
The bullshit
Unapologetically
Making you
Look like fool
Unapologetically

Cut by
Hitchens’s razor
Cut by

Hitchens’s razor

Godless
I am loud and proud
You won’t see me begging
For answers from above
Godless, loud and proud

Life is too short
To waste it on God
Appreciate the nature

With it’s chaos
And elegance
Over divine creation

Godless
I am loud and proud
You won’t see me begging
For answers from above
Godless, loud and proud
      `,
      },
      {
        title: 'Collectivistic Reproductive System',
        content: `
They control your body
See your as a vessel

Collectivistic
Reproductive system

Unborn life more important
Than yours

Collectivistic
Reproductive system
Of oppression

Unborn life more important
Than yours

I will aid
And abet
Abortion

They control your body
See your as a vessel

Collectivistic
Reproductive system
      `,
      },
      {
        title: 'Humane Rape',
        content: `
Humane slaughter
Humane rape

Distorted morality
Stemming from speciesism

Humane slaughter
Humane rape

Inseminated by hand
Then bolt to the skull

Raise them to be raped
Feed them to be slaughtered
Systematic evil
Modern day Holocaust

Humane slaughter
Humane rape

Inseminated by hand
Then bolt to the skull
      `,
      },
      {
        title: 'The Consumer Automaton',
        content: `
Empty eyes
Flickering
Human form
Misleading

Programmed to
Do one thing
Mindlessly
Consuming

Consume consume

Plastic bags
Full of shit
Plastic soul
So is
It

Shivers down your spine
As the plastic eyes

See their reflection
In the mirror

Consume consume

Mindlessly
Consuming
      `,
      },
      {
        title: 'An Open Door',
        content: `
Long gone are the days of
Happily ever after

Beatings as a sign of love
Gifts of broken nose and jaw

It seems
The door is open
When it could not
Be more closed

Then one sunny day
When you can’t bare no more
You close the fucking door
On his fucking head

It seems
The door is open
When it could not
Be more
      `,
      },
      {
        title: 'Those Are Walls I Call My Home',
        content: `
Those are walls I call my home

Every inch I’ve got to know
Those are walls I call my home

Come a little
Bit closer
I won’t
Bite

Those are walls I call my home
Every inch I’ve got
To know

Know!

Those are walls I call my home

Come a little
Bit closer
I won’t
Bite

Victims of false
Imprisonment

Futile attempts
To beat the system
Which is rotten
To the core
      `,
      },
      {
        title: 'Are We Human Or Are We Cancer?',
        content: `
Are we human
Or are we cancer?

The answer
Is all around

Are we human
Or are we cancer?

Parasitization
Death and destruction
Bloody legacy
Virus
Pedigree

Burn it!

The answer
Is all around
      `,
      },
      {
        title: 'They Told Me I Did It',
        content: `
I see blood
On my hands
Even though
There is none

They told me I did it
They told me I did it

Lost the faith
In myself
Gave in into
Their lies

I see blood
On my hands
Engraved in
My mind

Corrupted lazy cunts
Coercing false confessions

Framing the innocent

Letting the real killer
Roam

They told me I did it
They told me I did it
      `,
      },
      {
        title: 'Bring Back The Children',
        content: `
Delusional mind
Appalling war crime
Nation destruction
Children abduction

Bring back
The children
Bring back
The children

Fascist ideology
Fascist methods

Erasing the identity
Correcting memories

Bring back
The children
Bring back

Delusional mind
Appalling war crime
Children abduction
      `,
      },
      {
        title: 'Taste Or Life?',
        content: `
Taste or life?

The taste of death
In your mouth

Taste or life?

Choice you make

Bathing in
Suffering

The taste of death
In your mouth
Rotting flesh
In your gut

Five minutes of pleasure

Years of mutilation

Taste or life?

Choice you make
Every motherfucking day
      `,
      },
    ],
  },
  {
    name: 'Ashamed Of My Species',
    streamingURL:
      'https://open.spotify.com/embed/album/3LGuV5M5zvP0tor8snYpiD?utm_source=generator',
    artworkURL:
      'https://res.cloudinary.com/dqvimfd8b/image/upload/v1682022299/vermintide/sounds/Ashamed-Of-My-Species.png',
    purchaseURL: 'https://vermintide.bandcamp.com/album/ashamed-of-my-species',
    lyrics: [
      {
        title: 'How Dare You?',
        content: `
How dare you doubt my god
Saying my beliefs are flawed 
How dare you blunt my sword
Disrupting the holy war
How dare you tell the truth
To my feeble-minded youth

Hatred is pure
Sword is divine 
I must ensure
All infidels die

How dare you doubt my god
Saying my beliefs are flawed 
How dare you blunt my sword
Disrupting the holy war

How
Date
You 
Cunt

Killing
In god's name 
Killing
In god's name

Hatred is pure
Sword is divine 
I must ensure
All infidels die
  `,
      },
      {
        title: 'Empty Oceans',
        content: `
Micro-plastics fill up the fish
So they starve to death

Empty
Oceans
Empty
Oceans
Empty

Fishing nets have no eyes or ears
To know who they're killing 

Human's lust for flesh
Will make them 
Learn to live in the

Empty
Oceans
Empty
Oceans
  `,
      },
      {
        title: 'Arbitrary Lines',
        content: `
Kill for the history
Kill for the pride
Kill for the meaningless
Arbitrary lines

Divide us
And rule us

Be a tool of war
Be a tool of state
Be a tool of fantasy
They want to create

Artificial
Boundaries

Give us one more
Reason to
Hate 

Give us one more
Reason
To hate

Hate!
  `,
      },
      {
        title: 'Sea Of Vermin',
        content: `
Sea of
Vermin
Spreading the disease

Deadly
It's called
The humanity

Ravaging everything
In it's path
Dead soil, empty oceans
Bloodbath

Vermin
Vermin
Vermin
Vermin vermin vermin vermin

I'm ashamed of my species
I'm ashamed of my species
  `,
      },
      {
        title: 'Trauma Congenital',
        content: `
Subconscious compulsive urge to breed
Turns your blind eye to all those in need

Your selfish genes turned you into slave
Mindlessly copying your DNA

Humans
Propagate

Trauma congenital 
Destined to be deprived

Humans
Propagate

Crisis
They create

Overpopulation brings devastation
Children are born with their future torn

Trauma congenital 
Destined to be deprived
  `,
      },
      {
        title: 'NHI',
        content: `
Let them rot, let them reek
Cast out by society

No humans
Involved

Minorities forced to
Committing crime
Desperate, neglected
And dehumanized

Out of sight, out of mind
Just another NHI

No humans
Involved

Let them rot, let them reek
Cast out by society
  `,
      },
      {
        title: 'The Bridge Of Death',
        content: `
Thoughts of failure
Fill you with dread
What is success?
Is it all in your head?

Take a leap of faith
Jump without looking down
From the bridge of death
Jump! Jump!

Jump!

All doors are closed 
But death's door
Enter and become
More worthy than before 

Take a leap of faith
Jump without looking down
From the bridge of death
Jump! Jump!

Jump!
  `,
      },
      {
        title: 'Pierced Through The Neck',
        content: `
Pierced through the neck
Pierced through the neck

Glorified butcher
Meets his fate
Gored and maimed

Disappointing 
The mindless crowd
His face is plowed

Pierced through the neck

Innocent creature
Trapped inside
Cheap his life. 

Forced to engage
In senseless war
With matador

Pierced through the
Neck

Neck!

Blood
Gushing from
Carotid
Arteries

Pierced through the neck
Pierced through the neck
  `,
      },
      {
        title: 'Hell Is A Place On Earth',
        content: `
Female 
Genital
Mutilation 

Hell is a place on Earth 
Hell of a place

Female 
Genital
Mutilation 

Hell is a place on Earth 
Hell of a place

Repulsive
And senseless
Acts of
Evil

Removal of the clitoris
And infibulation
  `,
      },
      {
        title: 'Russian Battleship Fuck Off',
        content: `
Русский военный корабль иди на хуй

Русский военный корабль иди на хуй

Russian battleship fuck off
Russian battleship fuck
Off
  `,
      },
      {
        title: 'Total Control',
        content: `
All your actions captured by
(The) omnipresent cyber eye
Every aspect of your life
Registered and scrutinized

Total
Control

Scoring
System's

In place
To protect you
From yourself

Engineered
Sinister
Artificial
Humankind 

Total
Control 

Can't resist 
Hope is lost
Total 
Control
  `,
      },
    ],
  },
  {
    name: 'Meaningless Convulsions',
    streamingURL:
      'https://open.spotify.com/embed/album/6Ay1zvYut0KnIHDIsOco3m?utm_source=generator',
    artworkURL:
      'https://res.cloudinary.com/dqvimfd8b/image/upload/v1682022299/vermintide/sounds/Meaningless-Convulsions.png',
    purchaseURL: 'https://vermintide.bandcamp.com/album/meaningless-convulsions',
    lyrics: [
      {
        title: 'I Vomit',
        content: `
Primitive
Tradition
(Of) Barbaric
Institution

Circumcision
Is child abuse
I vomit
When I see

This

Some much though
Goes to name
Of the one
Soon be maimed

Circumcision
Is child abuse
I vomit

When
I
See
This

I vomit
I vomit
I vomit

Wrinkled lips sucking on infant skin
Perverted mutilation of innocent
  `,
      },
      {
        title: 'Castrate Rapist Scum',
        content: `
Ravenous lust
No empathy
Sexual predator

Countless victims,
Faceless, silent
Scarred for eternity

Karma with a rusty blade

Castrate rapist
Castrate rapist scum
Castrate rapist
Castrate rapist scum

Misogyny
Culture of rape
Faulty upbringing

Victim blaming
Slut-shaming
Fucked up society

Karma with a rusty blade

Castrate rapist
Castrate rapist scum
Castrate rapist
Castrate rapist scum

Rapist scum
Rapist scum
Rapist scum
  `,
      },
      {
        title: 'Earth Stays',
        content: `
Human ignorance
And will to power
Will obliterate
All the life on Earth

Skin melts
Bones crack
Life fades
Earth stays

Finally something will
Wipe that smerk off you face.
It's really hard to smile
When your face is all ash.

Human's arrogance
And denial of facts
Will obliterate
All the life on Earth

Skin melts
Bones crack
Life fades
Earth stays
  `,
      },
      {
        title: 'Lead',
        content: `
Barely fucking see
Barely fucking think
I barely fucking doing anything

Let's end this fucking mess
It's you and me brother
My gun is ready

Fire!

One for you
One for me
One for you
One for me

Bullet in your face
Brains are on the wall
But I never heard the second shot

When your brain is a fucking mess
You'll make up a friend
He will help you to

Die!

One for you
One for me
One for you
One for me
  `,
      },
      {
        title: "Don't Look In The Mirror",
        content: `
Don't look in the mirror
You'll be disappointed

Far from expectations
Close to mutilation
Never ending judgment
Zero disengagement
Body is the temple
Mind is Satan

Worship
Demon
Sacrifice
Sanity

Body dysmorphic disorder
BDD

Don't look in the mirror
Your eyes will betray you

Eternal mental torture
Wide awake in horror
Skin is all alone
Wrapping over bone
Body is the temple
Mind is Satan

Body dysmorphic disorder
BDD
  `,
      },
      {
        title: "Can't Breathe",
        content: `
Police brutality
Everyday reality
Bad luck to begin
Born with "wrong" color of skin

Can't breathe
Can't breathe

Can't breathe
Can't breathe
When your knee is on my neck

Rotten from within
System has always been
Power intoxicates
Hatred then dominates

Can't breathe
Can't breathe

Can't breathe
Can't breathe
When your knee is on my neck

How many people should die
For us to realize
  `,
      },
      {
        title: 'The Depression Maze',
        content: `
When your bed becomes a grave
Tired mind frees it’s slave
Pain-free body now decays
Lost in the depression maze

Tormented
Helpless soul
Inner struggle
Unfair

War

Goals are non existent
Pathways lead to death

When your bed becomes a grave
Tired mind frees it’s slave
Pain-free body now decays
Lost in the depression maze

Goals are non existent
Pathways lead to death

When your bed becomes a grave
Tired mind frees it’s slave
Pain-free body now decays
Lost in the depression maze
  `,
      },
      {
        title: 'The Plague',
        content: `
Millions die
Everyday
Waterfall of blood

No vaccine
Can be made
Against cruelty

Voiceless victims
Of gluttony
You pay to kill
Speciecide

Plague is us
Plague is us
Plague is us
Plague is
We are the plague

Fearful eyes
Stare at you
While you slit their throat

No regret
No remorse
Killer's state of mind

Voiceless victims
Of gluttony
You pay to kill
Speciecide

Plague is us
Plague is us
Plague is
We are the
Plague
  `,
      },
    ],
  },
];

export default sounds;
