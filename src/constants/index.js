import profileImage1 from './profile1.jpg';
import profileImage2 from './profile2.jpg';

const randomMessages = [
    'Hey there!',
    'Greetings!',
    'How\'s it going?',
    'Long time no see!',
    'Hope you\'re doing well!',
    'What have you been up to?',
    'It\'s a beautiful day!',
    'Nice weather we\'re having!',
    'Cheers!',
    'Catch you later!',
    'Take care!',
    'Have a great day!',
    'Enjoy your weekend!',
    'Stay safe!',
    'Keep smiling!',
    'Sending good vibes your way!',
];

export const contacts = [
    {
        profileImage: profileImage1,
        username: 'user1',
        message: randomMessages[Math.floor(Math.random() * randomMessages.length)],
    },
    {
        profileImage: profileImage2,
        username: 'user2',
        message: randomMessages[Math.floor(Math.random() * randomMessages.length)],
    },
    {
        profileImage: profileImage3,
        username: 'user3',
        message: randomMessages[Math.floor(Math.random() * randomMessages.length)],
    },
    {
        profileImage: profileImage4,
        username: 'user4',
        message: randomMessages[Math.floor(Math.random() * randomMessages.length)],
    },
    {
        profileImage: profileImage5,
        username: 'user5',
        message: randomMessages[Math.floor(Math.random() * randomMessages.length)],
    },
    {
        profileImage: profileImage6,
        username: 'user6',
        message: randomMessages[Math.floor(Math.random() * randomMessages.length)],
    },
    {
        profileImage: profileImage7,
        username: 'user7',
        message: randomMessages[Math.floor(Math.random() * randomMessages.length)],
    },
    {
        profileImage: profileImage8,
        username: 'user8',
        message: randomMessages[Math.floor(Math.random() * randomMessages.length)],
    },
    {
        profileImage: profileImage9,
        username: 'user9',
        message: randomMessages[Math.floor(Math.random() * randomMessages.length)],
    },
    {
        profileImage: profileImage10,
        username: 'user10',
        message: randomMessages[Math.floor(Math.random() * randomMessages.length)],
    },
];
