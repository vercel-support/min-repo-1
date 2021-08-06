import { mutationField, nonNull } from 'nexus'

export const CampaignDeleteManyMutation = mutationField('deleteManyCampaign', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'CampaignWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.campaign.deleteMany({ where } as any)
  },
})
