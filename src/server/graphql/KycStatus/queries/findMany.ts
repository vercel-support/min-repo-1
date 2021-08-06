import { queryField, nonNull, list } from 'nexus'

export const KycStatusFindManyQuery = queryField('findManyKycStatus', {
  type: nonNull(list(nonNull('KycStatus'))),
  args: {
    where: 'KycStatusWhereInput',
    orderBy: list('KycStatusOrderByInput'),
    cursor: 'KycStatusWhereUniqueInput',
    distinct: 'KycStatusScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.kycStatus.findMany({
      ...args,
      ...select,
    })
  },
})
