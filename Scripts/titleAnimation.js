const TIME_BETWEEN_TITLE_SWITCH_IN_SECONDS = 1.5;
const TIME_BETWEEN_TITLE_SWITCH_IN_MILISECONDS = 
  TIME_BETWEEN_TITLE_SWITCH_IN_SECONDS * 1000;

const TITLES = ['Forritari', 'Listamaður', 'Nemandi'];
const PRECEEDING_TEXT = "Ég er"

let titleElement = 
  document.getElementById('minor-author-info');

let titleIndex = 0;

function updateTitle(newTitle)
{
  return new Promise((resolve) => {
    setTimeout(() => {
      titleElement.innerHTML = newTitle;
      resolve();
    }, TIME_BETWEEN_TITLE_SWITCH_IN_MILISECONDS / 25)
  })
}

function unrenderTitle(title)
{
  return new Promise((resolve) => {
    setTimeout(async () => {
      for (let i = title.length; i >= 0; i--)
      {
        let endDot = i != 0 ? '.' : '';

        let newTitle = PRECEEDING_TEXT + " " +
         "<span style='font-weight: 400; color: #4BABFF'>" + 
            title.substring(0, i) + "</span>" + endDot;

        await updateTitle(newTitle);
      }
      
      resolve();
    }, TIME_BETWEEN_TITLE_SWITCH_IN_MILISECONDS);    
  })
}

function switchTitle()
{
  return new Promise((resolve) => {
    setTimeout(async () => {

      titleIndex = titleIndex == 
        (TITLES.length - 1) ? 0 : titleIndex + 1;

      let title = TITLES[titleIndex];

      for (let i = 0; i <= title.length; i++)
      {
        let newTitle = PRECEEDING_TEXT +
          " <span style='font-weight: 400; color: #4BABFF'>" + title.substring(0, i) + "</span>.";

        await updateTitle(newTitle);
      }

      await unrenderTitle(title);

      resolve();
    }, TIME_BETWEEN_TITLE_SWITCH_IN_MILISECONDS / 20)
  })
}

async function initiateTitleChanger()
{
  while (true)
  {
    await switchTitle();
  }
}

initiateTitleChanger();