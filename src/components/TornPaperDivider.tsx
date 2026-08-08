interface TornPaperDividerProps { topColor?: string; bottomColor?: string; className?: string;
} export function TornPaperDivider({ topColor = "#FFFFFF", bottomColor = "#FAF8F3", className = ""
}: TornPaperDividerProps) { return ( <div className={`w-full overflow-hidden leading-none z-10 relative -mt-[1px] ${className}`} style={{ backgroundColor: bottomColor }}> <svg className="block w-full h-[30px] md:h-[50px] lg:h-[70px]" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ fill: topColor }} > <path d="M0,0 L1200,0 L1200,60 C1100,20 1000,80 900,40 C800,0 700,60 600,20 C500,-20 400,40 300,80 C200,120 100,60 0,20 L0,0 Z" /> </svg> </div> );
}
