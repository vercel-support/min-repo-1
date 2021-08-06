import { mutationField, nonNull } from 'nexus'

export const KycStatusUpsertOneMutation = mutationField('upsertOneKycStatus', {
  type: nonNull('KycStatus'),
  args: {
    where: nonNull('KycStatusWhereUniqueInput'),
    create: nonNull('KycStatusCreateInput'),
    update: nonNull('KycStatusUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.kycStatus.upsert({
      ...args,
      ...select,
    })
  },
})
