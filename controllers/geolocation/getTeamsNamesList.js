const fs = require('fs/promises');
const path = require('path');

const teamNamesFilePath = path.join(
  __dirname,
  '..',
  '..',
  'teamNamesList.json'
);

const getTeamsNamesList = async (req, res, next) => {
  try {
    const data = await fs.readFile(teamNamesFilePath, 'utf8');
    const teamNamesList = JSON.parse(data);
    res.json(teamNamesList);
  } catch (error) {
    next(error);
  }
};

module.exports = getTeamsNamesList;
