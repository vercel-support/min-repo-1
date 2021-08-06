import { queryField, nonNull } from 'nexus'

export const ContactFindUniqueQuery = queryField('findUniqueContact', {
  type: 'Contact',
  args: {
    where: nonNull('ContactWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.contact.findUnique({
      where,
      ...select,
    })
  },
})
