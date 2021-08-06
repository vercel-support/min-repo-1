import { queryField, list } from 'nexus'

export const ContactFindFirstQuery = queryField('findFirstContact', {
  type: 'Contact',
  args: {
    where: 'ContactWhereInput',
    orderBy: list('ContactOrderByInput'),
    cursor: 'ContactWhereUniqueInput',
    distinct: 'ContactScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.contact.findFirst({
      ...args,
      ...select,
    })
  },
})
