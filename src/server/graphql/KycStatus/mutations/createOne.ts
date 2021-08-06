import { mutationField, nonNull } from 'nexus'

export const KycStatusCreateOneMutation = mutationField('createOneKycStatus', {
  type: nonNull('KycStatus'),
  args: {
    data: nonNull('KycStatusCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.kycStatus.create({
      data,
      ...select,
    })
  },
})
