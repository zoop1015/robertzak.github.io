// Data structure that stores the information for the art-work that will then
// automatically integrate to html & display on the website.
const WORK_DATA = [

    {
        work_image : "Assets/Images/TemplateArt.png",
        title : "Template Art #1",
        project : "Project Beta",
        time_created : "8/22/2023"
    },

    {
        work_image : "Assets/Images/TemplateArt.png",
        title : "Template Art #2",
        project : "Project Alpha",
        time_created : "3/3/2024"
    },

    {
        work_image : "Assets/Images/TemplateArt.png",
        title : "Template Art #3",
        project : "Project Theta",
        time_created : "2/9/2016"
    },


]

// Data structure that holds the work data
// in html along with their corresponding metadata
let workDataInstances = {

}

function constructHtmlOfWork(work_data)
{
    let workMinimizedList = document.getElementsByClassName("work-minimized");

    // Instantiating HTML
    let workMinimizedDiv = document.createElement("div");
    let workMinimizedImage = document.createElement("img");
    let workMinimizedTitleParagraph = document.createElement("p");
    let workMinimizedMiddleRowDiv = document.createElement("div");
    let workMinimizedProjectParagraph = document.createElement("p");
    let workMinimizedDateParagraph = document.createElement("p");

    // Setting appropriate attributes to instantited HTML.
    workMinimizedDiv.setAttribute("class", "work-minimized");
    workMinimizedDiv.setAttribute("id", workMinimizedList.length);
    workMinimizedImage.setAttribute("class", "work-minimized-image");
    workMinimizedImage.setAttribute("src", work_data.work_image);
    workMinimizedTitleParagraph.setAttribute("class", "work-minimized-title");
    workMinimizedMiddleRowDiv.setAttribute("class", "work-minimized-middle-row");
    workMinimizedProjectParagraph.setAttribute("class", "work-minimized-project");
    workMinimizedDateParagraph.setAttribute("class", "work-minimized-date");
    
    // Setting up the hierarchy for the instantited HTML.
    workMinimizedDiv.appendChild(workMinimizedImage);
    workMinimizedDiv.appendChild(workMinimizedTitleParagraph);
    workMinimizedDiv.appendChild(workMinimizedMiddleRowDiv);
    workMinimizedMiddleRowDiv.appendChild(workMinimizedProjectParagraph);
    workMinimizedMiddleRowDiv.appendChild(workMinimizedDateParagraph);

    workMinimizedTitleParagraph.textContent = work_data.title;
    workMinimizedProjectParagraph.textContent = work_data.project;
    workMinimizedDateParagraph.textContent = work_data.time_created;

    return workMinimizedDiv;
}

function constructHtmlOfPreviewWork(work_data)
{
  // Construct the html of preview work that's on the home page.
}

function AddWork(work_data)
{
    let workGridContainer = document.getElementById("work-minimized-container");
    let workContainer = constructHtmlOfWork(work_data);

    workGridContainer.appendChild(workContainer);

    workDataInstances[workContainer.getAttribute("id")] = work_data;
}

$(document).ready(() => {
    for (i = 0; i < WORK_DATA.length; i++)
    {
      AddWork(WORK_DATA[i]);
    }
})
