ID:=null;
if !Request.Header.TryGetQueryParameter("ID",ID) then BadRequest("Missing ID query parameter.");

{
	"Forwarded": count(PushEvent("/WebHookTester/Show.md",{"ID":ID},"Popup.Alert","Test"))
}
