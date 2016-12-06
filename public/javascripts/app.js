$(document).ready(function () {
	$('#siguiente').click(siguientePagina);

	function siguientePagina() {
		$('#siguiente').attr('href', 'users/segunda');
	}
	
	var state = {
		vote: {
			pair: [
				'peli1',
				'peli2',
			],
			tally: {
				peli1: 1,
				peli2: 2,
			},
		},
		hasVoted:  'peli1'
	};
	
	function renderVote(state) {
		var pair = state.vote.pair;
		
		var options = '';
		
		pair.forEach(function (ele) {
			options += (
				'<button type="button" class="opciones">' +
					ele +
				'</button>'
			);
		});
		
		var mount = $('#options-mount');
		var button = mount.append(options);
		var botones = $('.opciones');
		
		if(botones.click(function(){
			var divcheck = $('#check');
			var check = '<div class="check"></div>';
				divcheck.append(check);
				$(this).append(divcheck);
				$(botones).attr('disabled',true);
		}));

	}
	renderVote(state);
});
