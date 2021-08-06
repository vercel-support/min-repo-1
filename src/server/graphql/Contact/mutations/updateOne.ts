import { mutationField, nonNull } from 'nexus'

export const ContactUpdateOneMutation = mutationField('updateOneContact', {
  type: nonNull('Contact'),
  args: {
    where: nonNull('ContactWhereUniqueInput'),
    data: nonNull('ContactUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.contact.update({
      where,
      data,
      ...select,
    })
  },
})
