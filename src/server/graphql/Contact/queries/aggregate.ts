import { queryField, list } from 'nexus'

export const ContactAggregateQuery = queryField('aggregateContact', {
  type: 'AggregateContact',
  args: {
    where: 'ContactWhereInput',
    orderBy: list('ContactOrderByInput'),
    cursor: 'ContactWhereUniqueInput',
    distinct: 'ContactScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.contact.aggregate({ ...args, ...select }) as any
  },
})
