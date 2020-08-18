import "../scss/main.scss";

const GIT_API_URL_REPOS =
  "https://api.github.com/users/mateuszsuberlak/repos?sort=created&direction=desc";

const githubRepoListElement = document.querySelector(".github-repo-list--js");

const githubConsoleTemplate = document.querySelector(
  ".github-repo-console-template--js"
);

fetch(GIT_API_URL_REPOS)
  .then((response) => response.json())
  .then((data) => data.map((x) => SetGitHubReposiotryData(x)))
  .catch((error) => {
    console.error("Error accessing github api:", error);
  });

function SetGitHubReposiotryData(repoData) {
  const consoleTemplateClone = githubConsoleTemplate.content.cloneNode(true);

  const repoNameElement = consoleTemplateClone.querySelector(
    ".github-project-name--js"
  );
  repoNameElement.textContent = repoData.name;

  const repoDescriptionElement = consoleTemplateClone.querySelector(
    ".github-project-description--js"
  );
  repoDescriptionElement.textContent = repoData.description;

  const repoDemoUrlElement = consoleTemplateClone.querySelector(
    ".github-project-demo-url--js"
  );
  
  if (repoData.homepage) {
    repoDemoUrlElement.href = repoData.homepage;
    repoDemoUrlElement.title = "Demo: " + repoData.name + " see here";
    repoDemoUrlElement.innerHTML = "see here";
  } else {
    repoDemoUrlElement.removeAttribute("href");
    repoDemoUrlElement.parentElement.className += " github-repo-console-content--line-right__link--is-Disabled";
  }

  const repoUrlElement = consoleTemplateClone.querySelector(
    ".github-project-repo-url--js"
  );

  if (repoData.html_url) {
    repoUrlElement.href = repoData.html_url;
    repoUrlElement.title = "Github repository:" + repoData.name + " source code";
    repoUrlElement.innerHTML = "source code";
  }
  else {
    repoDemoUrlElement.removeAttribute("href");
    repoDemoUrlElement.parentElement.className += " github-repo-console-content--line-right__link--is-Disabled";
  }

  githubRepoListElement.appendChild(consoleTemplateClone);
}
