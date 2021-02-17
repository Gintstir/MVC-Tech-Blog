
$('#noPostorTitleEntered').hide();

async function newFormHandler(event) {
    
    $('#noPostorTitleEntered').hide()
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const post_content = document.querySelector('textarea[name="post-content"]').value;

    if(title != "" && post_content != "") {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title,
                post_content
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    
        if (response.ok) {
            document.location.replace('/dashboard');
        }
    } else {
        $('#noPostorTitleEntered').show();
        return;
    } 
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);