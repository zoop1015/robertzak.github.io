// Data structure that stores the information for the art-work that will then
// automatically integrate to html & display on the website.
const WORK_DATA = [

    {
        work_image : "Assets/Images/AferdHlutirUti.jpg",
        title : "Áferð á Úti Hlutum",
        project : "Áferð",
        time_created : "8/22/2023"
    },

    {
        work_image : "Assets/Images/ReidiOrdDagsins.jpg",
        title : "Reiði",
        project : "Orð Dagsins",
        time_created : "8/21/2023"
    },

    {
        work_image : "Assets/Images/OrdDagsinsFrumskogur.jpg",
        title : "Frumskógur",
        project : "Orð Dagsins",
        time_created : "8/23/2023"
    },

    {
        work_image : "Assets/Images/LikamsHlutir.jpg",
        title : "Líkamshlutir",
        project : "Skuggar og Ljós",
        time_created : "8/22/2023"
    },

    {
        work_image : "Assets/Images/HlutirUti.jpg",
        title : "Hlutir Úti",
        project : "Skuggar og Ljós",
        time_created : "8/23/2023"
    },

]

const WORK_PREVIEWS_AMOUNT = 2;

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
  let workImagePreview = document.createElement("img");
  workImagePreview.setAttribute('src', work_data.work_image);
  workImagePreview.setAttribute('class', 'image-preview');

  return workImagePreview;
}

function AddWorkPreview(work_data)
{
    let workImagePreview = constructHtmlOfPreviewWork(work_data);
    let workImagesPreviewContainer = document.getElementById('image-work-previews');

    workImagesPreviewContainer.appendChild(workImagePreview);
}

function AddWorkPreviews()
{
    AddWorkPreview(WORK_DATA[0]);
    AddWorkPreview(WORK_DATA[1]);
}

function AddWork(work_data)
{
    let workGridContainer = document.getElementById("work-minimized-container");
    let workContainer = constructHtmlOfWork(work_data);

    workGridContainer.appendChild(workContainer);

    workDataInstances[workContainer.getAttribute("id")] = work_data;
}