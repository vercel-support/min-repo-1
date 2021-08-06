import { mutationField, nonNull } from 'nexus'

export const CampaignMemberStatusDeleteOneMutation = mutationField(
  'deleteOneCampaignMemberStatus',
  {
    type: 'CampaignMemberStatus',
    args: {
      where: nonNull('CampaignMemberStatusWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.campaignMemberStatus.delete({
        where,
        ...select,
      })
    },
  },
)
