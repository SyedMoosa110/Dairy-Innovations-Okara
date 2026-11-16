import { Play } from 'lucide-react'
import { waLink } from '../data/site'
import { useSite } from '../hooks/useSite'
import Modal from './Modal'
import SmartImage from './SmartImage'

export default function VideoModal() {
  const { video, setVideo } = useSite()
  return (
    <Modal open={!!video} onClose={() => setVideo(null)} title={video?.title ?? 'Video'} wide>
      {video && (<div>
        <div className="relative aspect-video bg-black">
          {video.src
            ? <video src={video.src} controls autoPlay playsInline className="h-full w-full" poster={video.image[0]} />
            : (<><SmartImage src={video.image} alt={video.title} className="absolute inset-0 h-full w-full opacity-60" />
              <div className="absolute inset-0 grid place-items-center"><span className="grid h-20 w-20 place-items-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur"><Play size={30} fill="currentColor" /></span></div></>)}
        </div>
        <div className="p-4 sm:p-6">
          <p className="text-sm sm:text-base text-slate-300">{video.desc}</p>
          {!video.src && <p className="mt-2 text-xs sm:text-sm text-slate-500">Preview only — set <code>src</code> for this item in <code>src/data/site.ts</code> to play the client's footage.</p>}
          <a href={waLink(`Assalam-o-Alaikum, I would like to see: ${video.title}`)} target="_blank" rel="noreferrer" className="btn btn-gold mt-5 w-full sm:w-auto text-center">Request on WhatsApp</a>
        </div>
      </div>)}
    </Modal>
  )
}
