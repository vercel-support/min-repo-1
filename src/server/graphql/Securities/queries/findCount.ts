import { queryField, nonNull, list } from 'nexus'

export const SecuritiesFindCountQuery = queryField('findManySecuritiesCount', {
  type: nonNull('Int'),
  args: {
    where: 'SecuritiesWhereInput',
    orderBy: list('SecuritiesOrderByInput'),
    cursor: 'SecuritiesWhereUniqueInput',
    distinct: 'SecuritiesScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.securities.count(args as any)
  },
})
