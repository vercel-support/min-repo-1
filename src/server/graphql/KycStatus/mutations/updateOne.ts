import { mutationField, nonNull } from 'nexus'

export const KycStatusUpdateOneMutation = mutationField('updateOneKycStatus', {
  type: nonNull('KycStatus'),
  args: {
    where: nonNull('KycStatusWhereUniqueInput'),
    data: nonNull('KycStatusUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.kycStatus.update({
      where,
      data,
      ...select,
    })
  },
})
