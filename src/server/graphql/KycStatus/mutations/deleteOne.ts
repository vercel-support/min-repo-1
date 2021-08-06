import { mutationField, nonNull } from 'nexus'

export const KycStatusDeleteOneMutation = mutationField('deleteOneKycStatus', {
  type: 'KycStatus',
  args: {
    where: nonNull('KycStatusWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.kycStatus.delete({
      where,
      ...select,
    })
  },
})
