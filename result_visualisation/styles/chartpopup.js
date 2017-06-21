function chartpopup(){
	var visible = false;
	var fieldData = [];
	var messageString = "";
	chartpopup.prototype.show = function(d){
		messageString = "<table style='font-size:13px'>"
		if(!visible){
			for(var key in d){
				fieldData[key] = d[key];
				messageString += "<tr><th>"+key+":</th><td style='padding-left:10px;'>"+d[key]+"</td></tr>";
			}
			messageString += "</table>";
			console.log(fieldData);
		}
		bootbox.dialog({
			title: 'Data:',
			message: messageString,
			animate: true,
			backdrop: true,
			buttons: {
				ok: {
					label: 'OK',
					className: 'button btn-primary',
					callback: function () {
						self.visible = false;
					}
				}
			},
			onEscape: function () {
				self.visible = false;
			}
		});
	}
}
