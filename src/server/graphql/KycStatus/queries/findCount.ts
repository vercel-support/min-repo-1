import { queryField, nonNull, list } from 'nexus'

export const KycStatusFindCountQuery = queryField('findManyKycStatusCount', {
  type: nonNull('Int'),
  args: {
    where: 'KycStatusWhereInput',
    orderBy: list('KycStatusOrderByInput'),
    cursor: 'KycStatusWhereUniqueInput',
    distinct: 'KycStatusScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.kycStatus.count(args as any)
  },
})
