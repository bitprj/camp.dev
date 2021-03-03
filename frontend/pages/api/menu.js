export default function handler(req, res) {
    res.status(200).json(
        { menuoption: 
            ['Intro to JavaScript', 'Intro to Serverless', 'Building Slackbots', 'Intro to GameDev']
    })
  }