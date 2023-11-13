document.getElementById("next").onclick = next();
document.getElementById("prev").onclick = previous();

function next()
{
    let lists = document.querySelectorAll(".item");
    document.getElementById("slide").appendChild(lists[0]);
}

function previous()
{
    let lists = document.querySelectorAll(".item");
    document.getElementById("slide").prepend(lists[lists.length - 1]);
}