import { mutationField, nonNull } from 'nexus'

export const ContactDeleteOneMutation = mutationField('deleteOneContact', {
  type: 'Contact',
  args: {
    where: nonNull('ContactWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.contact.delete({
      where,
      ...select,
    })
  },
})
