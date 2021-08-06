import { queryField, list } from 'nexus'

export const SecuritiesFindFirstQuery = queryField('findFirstSecurities', {
  type: 'Securities',
  args: {
    where: 'SecuritiesWhereInput',
    orderBy: list('SecuritiesOrderByInput'),
    cursor: 'SecuritiesWhereUniqueInput',
    distinct: 'SecuritiesScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.securities.findFirst({
      ...args,
      ...select,
    })
  },
})
