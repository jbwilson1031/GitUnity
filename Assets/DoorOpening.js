#pragma strict

function Update () 
{
var hit : RaycastHit;
var ray : Ray = Camera.main.ScreenPointToRay(Vector3(Screen.width*0.5,Screen.height*0.5, 0));
 if (Physics.Raycast (ray, hit, 3))
 {
    if (hit.collider.gameObject.tag == "Door")
 {
  if(Input.GetKeyDown("e"))
  {
   hit.collider.gameObject.GetComponent.<Animation>().Play("DoorrOpen");
  hit.collider.gameObject.tag = "Close";
  }
 }
    else if (hit.collider.gameObject.tag == "Close")
 {
  if(Input.GetKeyDown("e"))
  {
   hit.collider.gameObject.GetComponent.<Animation>().Play("DoorrClose");
    hit.collider.gameObject.tag = "Door";
  }
 }
	
			
 }
 }