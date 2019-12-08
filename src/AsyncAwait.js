import axios from 'axios';

// Função delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
function onePerSecond() {
  delay().then(() => {
    console.log('1s');
    delay().then(() => {
      console.log('2s');
      delay().then(() => {
        console.log('3s');
      });
    });
  });
}

onePerSecond();

async function onePerSecondAsync() {
  await delay();
  console.log('1s');

  await delay();
  console.log('2s');

  await delay();
  console.log('3s');
}

onePerSecondAsync();

function getUserFromGithub(user) {
  axios
    .get(`https://api.github.com/users/${user}`)
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.log('Usuário não existe');
    });
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

async function getUserFromGithubAsync(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (err) {
    console.log('Usuário não existe');
  }
}

getUserFromGithubAsync('diego3g');
getUserFromGithubAsync('diego3g124123');

class Github {
  static getRepositories(repo) {
    axios
      .get(`https://api.github.com/repos/${repo}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log('Repositório não existe');
      });
  }

  static async getRepositoriesAsync(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response.data);
    } catch (err) {
      console.log('Repositório não existe');
    }
  }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

Github.getRepositoriesAsync('rocketseat/rocketseat.com.br');
Github.getRepositoriesAsync('rocketseat/dslkvmskv');

const searchUser = user => {
  axios
    .get(`https://api.github.com/users/${user}`)
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.log('Usuário não existe');
    });
};

searchUser('diego3g');

const searchUserAsync = async user => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (err) {
    console.log('Usuário não existe');
  }
};

searchUserAsync('diego3g');
