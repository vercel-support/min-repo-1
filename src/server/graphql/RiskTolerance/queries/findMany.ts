import { queryField, nonNull, list } from 'nexus'

export const RiskToleranceFindManyQuery = queryField('findManyRiskTolerance', {
  type: nonNull(list(nonNull('RiskTolerance'))),
  args: {
    where: 'RiskToleranceWhereInput',
    orderBy: list('RiskToleranceOrderByInput'),
    cursor: 'RiskToleranceWhereUniqueInput',
    distinct: 'RiskToleranceScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.riskTolerance.findMany({
      ...args,
      ...select,
    })
  },
})
