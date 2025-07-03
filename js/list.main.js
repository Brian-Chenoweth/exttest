$(function() {	
	var pageOptionsTop = {
		paginationClass: 'pagination',
		innerWindow: 20,
		outerWindow: 20
	};

	var listOptions = {
		valueNames: [ 'name', 'college', 'type', 'blended', 'oneYear', 'culm', 'unit',
			'test', 'online' ],
		page: 10,
		plugins: [ ListPagination(pageOptionsTop) ]
	};

	var list = new List('programs', listOptions);

	var filters = {};

	// Show programs based on filters that are set
	$('.filter').change(function() {
		var filterType = $(this).attr('data-filter');
		var filterValue = $(this).find('option:selected').html();
	
		filters[filterType] = filterValue;
	
		list.filter(function(item) {
			for (var i in filters) {
				if (item.values()[i].indexOf(filters[i]) < 0 && filters[i] !== 'Show All') {
					return false;
				}
			}
		
			return true;
		});
	});
	
	// Show programs based on search terms
	$('.searchList').keyup(function() {
		var searchTerm = $(this).val();
		
		if (searchTerm !== '') {
			list.search(searchTerm);
		}
		else {
			list.search();
		}
	});
	
	// Prevent form submission
	$('[name=filterSearch]').submit(function(e) {
		e.preventDefault();
	});
	
	// Reset list
	var listReset = function() {
		filters = {};
		list.search();
		list.filter();
	};
	
	$('[name=filterSearch] [type=reset]').click(listReset);

	list.sort('name', { asc: true });
	listReset();
});