import { mutationField, nonNull } from 'nexus'

export const ContactUpsertOneMutation = mutationField('upsertOneContact', {
  type: nonNull('Contact'),
  args: {
    where: nonNull('ContactWhereUniqueInput'),
    create: nonNull('ContactCreateInput'),
    update: nonNull('ContactUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.contact.upsert({
      ...args,
      ...select,
    })
  },
})
