import { Sparkles } from 'lucide-react'; export function AIBadge() { return ( <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white/80 text-[10px] px-2 py-1 rounded-sm flex items-center gap-1 z-20 pointer-events-none"> <Sparkles size={10} /> <span>Imagen generada por IA</span> </div> );
}
