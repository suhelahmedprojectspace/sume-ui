'use client'

import React, { useState } from 'react'
import { Modal } from '@sume/ui/components/Modal'
import { Button } from '@sume/ui/components/Button'

const ModalExamplePage = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Modal Demo</h1>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title="Delete Confirmation" 
       showAction
        actionLabel="Delete"
        onAction={() => {
          alert("Deleted!")
          setIsOpen(false)
        }}
      >
        <div className="text-gray-700 space-y-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consectetur laudantium provident ipsa repellat vel alias! Laudantium omnis nostrum, quaerat quos asperiores a illo voluptates doloremque incidunt cum vero necessitatibus?
              Dolore, non! Ratione error beatae et nemo! Corporis dolore enim, aliquam animi doloribus provident sunt cupiditate at, quos incidunt voluptate hic nam maxime modi, impedit cum ex quibusdam necessitatibus repudiandae?
              Error nihil, ratione aliquam mollitia nostrum, aliquid commodi beatae consequatur animi fugit recusandae. Ullam, ipsum nihil impedit dignissimos alias, atque modi totam suscipit culpa tempora velit aliquam aut, magni fugiat.
              Maxime accusamus tempora adipisci illo dolore minima dicta autem labore a odio minus quam, culpa molestiae suscipit doloremque fugiat repudiandae nemo quod accusantium. Enim ex ipsa nam, maiores explicabo quos.
              Error maxime perspiciatis est corrupti alias necessitatibus accusamus optio, officia molestias et. Labore sunt placeat maiores tenetur reprehenderit eos eveniet et inventore blanditiis eligendi, nam cupiditate temporibus excepturi ut obcaecati.
              Ab ipsam distinctio architecto repellendus consectetur, asperiores repellat facere placeat hic rem sint quisquam! Nihil labore, nostrum blanditiis officiis alias explicabo asperiores corporis unde neque vitae in cupiditate praesentium facere.
              Aut sed nemo aliquid optio, facere magni ratione, amet quidem ipsum debitis et numquam commodi officiis cumque iusto! Temporibus, id. Numquam dolor dolorum quas doloribus laudantium inventore ex corporis deserunt!
              Dolorem explicabo debitis id fugit magni, officiis ducimus exercitationem aut obcaecati totam sint quasi esse ea aperiam. Assumenda, commodi similique ipsam, repudiandae expedita quis in dolore reprehenderit, ducimus error dolores?
              Sed sapiente optio minima labore nulla beatae ea cumque enim doloribus repellat commodi modi fugit eum nam molestiae suscipit voluptatem tempora aliquid dolorem, consectetur quia praesentium, soluta vel exercitationem. Incidunt.
              Voluptatem, quaerat! Nam incidunt necessitatibus ad asperiores ipsum mollitia obcaecati debitis porro hic consequuntur sit unde exercitationem, modi deleniti est maiores distinctio quaerat id facilis. Excepturi a dolorem tempora placeat?
              Praesentium rerum, ratione officia possimus facilis ullam ab, sed perferendis odio laboriosam a necessitatibus nobis vero, suscipit expedita obcaecati voluptatibus ad? Possimus eos nesciunt, dicta aut vero fuga nobis ea.
              Officia assumenda iste possimus? Impedit et consequatur nulla enim consequuntur perferendis perspiciatis voluptates cupiditate. Repudiandae temporibus, saepe aliquid, quia ut odit, error autem distinctio nisi assumenda deserunt minus explicabo. Neque!
              Pariatur sunt cupiditate maxime totam numquam error ratione ipsum tempora in. Asperiores accusamus libero fugit nesciunt? Consectetur veritatis alias dolores voluptates repudiandae beatae quo, a commodi magni architecto. Deleniti, minus?
              Rem nulla nesciunt cum aliquid assumenda aperiam illum labore deleniti ipsam odit, iusto fuga maxime, itaque suscipit obcaecati laborum debitis et libero voluptas voluptatibus in similique dolor. Sint, illum aspernatur.
              Sapiente cumque nemo incidunt tempora voluptatem ab autem? Veniam amet velit, omnis laborum ut aspernatur. Itaque corporis molestias aliquam ex dolore veritatis libero illo ipsum accusantium quasi, aut soluta ducimus?
              Hic magnam officia voluptatibus iure id, facilis, expedita at perspiciatis nobis explicabo assumenda sunt voluptates ipsum similique excepturi ut, repellat libero nam cum aliquam quas mollitia modi necessitatibus cumque! Alias.
              Consequuntur voluptas odit facilis fuga ipsam rerum non, minima ea voluptates aut maxime perferendis. Ducimus, corrupti delectus rem id asperiores est doloremque quos placeat sapiente amet nulla atque ipsam consectetur?
              Totam, quas perspiciatis! Consectetur culpa facere nobis aliquam mollitia pariatur nemo expedita? Labore voluptatem possimus perspiciatis quo beatae aperiam incidunt facere alias, id atque vero, rem doloremque molestiae consequuntur nam?
              Praesentium dolore inventore amet earum voluptatem cum consequuntur reprehenderit hic quo sunt distinctio perferendis laudantium pariatur eveniet, vitae repellendus ullam. Ratione a possimus doloribus, praesentium mollitia quo earum repudiandae dicta?
              Porro doloremque id impedit sunt in quos quibusdam? Sed aliquam ducimus recusandae laudantium dolore veniam doloremque, nulla nostrum possimus eum id eveniet animi veritatis incidunt optio, aperiam quibusdam provident quae.
            </p>
        </div>
      </Modal>
    </div>
  )
}

export default ModalExamplePage
