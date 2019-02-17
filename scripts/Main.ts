class Main
{
	private col:Collection;
	private graph:Graph;
	private snd:Sounds;
	private state:States;
	private ui:UI;
	
	constructor()
	{
		this.col=Collection.getInstance();
		this.graph = Graph.getInstance();
		this.snd = new Sounds();
		this.state = new States();
		this.ui = new UI();
	}	
	
	public gameLoop():void
	{
		
		if (col.loadGraph && col.loadSounds)
		{
			this.state.go(items);
			this.graph.go();			
			this.ui.go();
			this.snd.toPlay();
		}
		this.graph.rendAll(); 
		requestAnimationFrame(this.gameLoop.bind(this)); 
	}
}