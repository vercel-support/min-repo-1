import { queryField, list } from 'nexus'

export const KycStatusFindFirstQuery = queryField('findFirstKycStatus', {
  type: 'KycStatus',
  args: {
    where: 'KycStatusWhereInput',
    orderBy: list('KycStatusOrderByInput'),
    cursor: 'KycStatusWhereUniqueInput',
    distinct: 'KycStatusScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.kycStatus.findFirst({
      ...args,
      ...select,
    })
  },
})
