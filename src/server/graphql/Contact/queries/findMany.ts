import { queryField, nonNull, list } from 'nexus'

export const ContactFindManyQuery = queryField('findManyContact', {
  type: nonNull(list(nonNull('Contact'))),
  args: {
    where: 'ContactWhereInput',
    orderBy: list('ContactOrderByInput'),
    cursor: 'ContactWhereUniqueInput',
    distinct: 'ContactScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.contact.findMany({
      ...args,
      ...select,
    })
  },
})
