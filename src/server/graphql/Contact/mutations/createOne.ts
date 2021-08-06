import { mutationField, nonNull } from 'nexus'

export const ContactCreateOneMutation = mutationField('createOneContact', {
  type: nonNull('Contact'),
  args: {
    data: nonNull('ContactCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.contact.create({
      data,
      ...select,
    })
  },
})
