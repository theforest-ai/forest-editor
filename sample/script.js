InlineEditor
	.create( document.querySelector( '.editor' ), {
		// Editor configuration.
		plugins: ['Title'],
		title: {
            placeholder: 'My custom placeholder for the title'
        },
        placeholder: 'My custom placeholder for the body'
		// removePlugins: [ 'Heading', 'Markdown', 'Bold' ],
	} )
	.then( editor => {
        editor.on( 'change:isReadOnly', ( evt, name, value, oldValue ) => {
            editor.data.processor = new HtmlDataProcessor(); // editor.getData() in HTML.
        } );
    } )
	.catch( handleSampleError );

function handleSampleError( error ) {
	const issueUrl = 'https://github.com/ckeditor/ckeditor5/issues';

	const message = [
		'Oops, something went wrong!',
		`Please, report the following error on ${ issueUrl } with the build id "9lhnldk7po97-nohdljl880ze" and the error stack trace:`
	].join( '\n' );

	console.error( message );
	console.error( error );
}
