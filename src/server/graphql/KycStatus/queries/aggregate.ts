import { queryField, list } from 'nexus'

export const KycStatusAggregateQuery = queryField('aggregateKycStatus', {
  type: 'AggregateKycStatus',
  args: {
    where: 'KycStatusWhereInput',
    orderBy: list('KycStatusOrderByInput'),
    cursor: 'KycStatusWhereUniqueInput',
    distinct: 'KycStatusScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.kycStatus.aggregate({ ...args, ...select }) as any
  },
})
