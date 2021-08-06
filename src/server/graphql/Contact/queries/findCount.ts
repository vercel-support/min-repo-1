import { queryField, nonNull, list } from 'nexus'

export const ContactFindCountQuery = queryField('findManyContactCount', {
  type: nonNull('Int'),
  args: {
    where: 'ContactWhereInput',
    orderBy: list('ContactOrderByInput'),
    cursor: 'ContactWhereUniqueInput',
    distinct: 'ContactScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.contact.count(args as any)
  },
})
