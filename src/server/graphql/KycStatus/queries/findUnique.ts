import { queryField, nonNull } from 'nexus'

export const KycStatusFindUniqueQuery = queryField('findUniqueKycStatus', {
  type: 'KycStatus',
  args: {
    where: nonNull('KycStatusWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.kycStatus.findUnique({
      where,
      ...select,
    })
  },
})
