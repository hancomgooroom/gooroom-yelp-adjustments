function showThread( targetName )
{
	var oTarget = document.getElementById(targetName);
	oTarget.style.display = ( oTarget.style.display == 'none' )?
	'':'none';
            
	return null;
 }

function showMore(id) {
        var obj = document.getElementById(id);
        if (obj.style.display == 'none')
            obj.style.display = 'inline-block';
        else
            obj.style.display = 'none';
}
