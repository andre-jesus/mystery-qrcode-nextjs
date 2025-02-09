'use client'

interface LoadingScreenProps {
  progress: number
}

export default function LoadingScreen({ progress }: LoadingScreenProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="text-qr-green text-xl font-bold mb-4">
          Loading Experience
        </div>
        <div className="w-64 h-2 bg-black/30 rounded-full overflow-hidden border border-qr-green/30">
          <div 
            className="h-full bg-qr-green transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}